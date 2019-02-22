import React, { FunctionComponent } from 'react';
import { PacketContainer, PacketLayerContainer } from './Packet.styles';
import Layer from '../Layer/Layer';

export interface LayerType {
  title: string;
  description: string;
}

const layerTitles: LayerType[] = [
  { title: 'Application', description: 'HTTP/FTP/SSH/SMTP' },
  { title: 'Transport', description: 'UDP/TC' },
  { title: 'Network', description: 'IP' },
  { title: 'Link', description: 'WIFI, ethernet' },
  { title: 'Physical', description: 'cables' }
];

const Packet: FunctionComponent<{}> = () => {
  return (
    <PacketContainer>
      <h1>Packet</h1>
      <PacketLayerContainer>
        {layerTitles.map(layerData => (
          <Layer key={layerData.title} layerData={layerData} />
        ))}
      </PacketLayerContainer>
    </PacketContainer>
  );
};

export default Packet;
