import React, { FunctionComponent, useState } from 'react';
import { LayerContainer } from './Layer.styles';
import { LayerType } from '../Packet/Packet';

interface LayerProps {
  layerData: LayerType;
}
const Layer: FunctionComponent<LayerProps> = ({ layerData }) => {
  const [activeLayer, setActiveLayer] = useState(false);

  return (
    <LayerContainer
      onClick={() => setActiveLayer(!activeLayer)}
      activeLayer={activeLayer}
    >
      {layerData.title}
      <span>{layerData.description}</span>
    </LayerContainer>
  );
};

export default Layer;
