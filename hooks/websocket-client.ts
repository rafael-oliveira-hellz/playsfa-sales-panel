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

const connect = (onPaymentResponse: OnPaymentResponse, type: Type) => {
  client.onConnect = (frame: Frame) => {
    console.log('Conectado: ' + frame);

    if (type === 'pix') {
      client.subscribe('/topic/response', (message: IMessage) => {
        onPaymentResponse(message.body);
      });
    }

    if (type === 'card') {
      client.subscribe('/topic/notifications', (message: IMessage) => {
        onPaymentResponse(message.body);
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
