import { Client, Frame, IMessage } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

type OnPaymentResponse = (message: string) => void;
type Type = 'pix' | 'card';

const client = new Client({
  webSocketFactory: () => new SockJS('https://api.comprar.vip/ws'),
  reconnectDelay: 5000,
  heartbeatIncoming: 4000,
  heartbeatOutgoing: 4000,
  debug: (str: string) => {
    console.log(str);
  },
});

const delayCallback = (callback: OnPaymentResponse, message: string, delay: number) => {
  setTimeout(() => {
    callback(message);
  }, delay);
};

const connect = (onPaymentResponse: OnPaymentResponse, type: Type, sessionId: string, onConnectCallback: (frame: Frame) => void) => {
  client.onConnect = (frame: Frame) => {
    console.log('Conectado: ' + frame);

    if (type === 'pix') {
      subscribeToPixTopic();
    }

    if (type === 'card') {
      subscribeToCardTopic();
    }

    onConnectCallback(frame);
  };

  client.onStompError = (frame: Frame) => {
    console.log('Erro no servidor STOMP: ' + frame.body);
  };

  const subscribeToPixTopic = () => {
    if (client.connected) {
      client.subscribe(`/user/${sessionId}/topic/response`, (message: IMessage) => {
        delayCallback(onPaymentResponse, message.body, 5000);
      });
    } else {
      setTimeout(subscribeToPixTopic, 1000);
    }
  };

  const subscribeToCardTopic = () => {
    if (client.connected) {
      client.subscribe(`/user/${sessionId}/topic/notifications`, (message: IMessage) => {
        delayCallback(onPaymentResponse, message.body, 5000);
      });
    } else {
      setTimeout(subscribeToCardTopic, 1000);
    }
  };

  client.activate();
};


const disconnect = () => {
  if (client.connected) {
    client.deactivate();
  }
};

export { connect, disconnect };
