import {OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer} from '@nestjs/websockets';
import {Logger} from '@nestjs/common';

@WebSocketGateway(4001 , { transports: ['websocket'] })
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer()
    wss;

    private logger = new Logger('AppGateway');

    handleConnection(client) {
        this.logger.log('New client connected');
        client.emit('connection', 'Successfully connected to server');
    }

    handleDisconnect(client) {
        this.logger.log('Client disconnected');
    }
}
