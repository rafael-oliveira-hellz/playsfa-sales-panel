import { Client, Frame, IMessage } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

type OnPaymentResponse = (message: string) => void;
type Type = 'pix' | 'card';

const client = new Client({
  webSocketFactory: () => new SockJS('https://api.comprar.vip/ws'),
  reconnectDelay: 5000,
  debug: (str: string) => {
    console.log(str);
  },
});

const delayCallback = (callback: OnPaymentResponse, message: string, delay: number) => {
  setTimeout(() => {
    callback(message);
  }, delay);
};

const connect = (onPaymentResponse: OnPaymentResponse, type: Type, sessionId: string) => {
  client.onConnect = (frame: Frame) => {
    console.log('Conectado: ' + frame);

    if (type === 'pix') {
      client.subscribe(`/user/${sessionId}/topic/response`, (message: IMessage) => {
        delayCallback(onPaymentResponse, message.body, 5000);
      });
    }

    if (type === 'card') {
      client.subscribe('/topic/notifications', (message: IMessage) => {
        delayCallback(onPaymentResponse, message.body, 5000);
      });
    }
  };

  client.onStompError = (frame: Frame) => {
    console.log('Erro no servidor STOMP: ' + frame.body);
  };

  client.activate();
};

const disconnect = () => {
  if (client.connected) {
    client.deactivate();
  }
};

export { connect, disconnect };
