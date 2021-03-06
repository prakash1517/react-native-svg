import extractBrush from './extractBrush';
import extractOpacity from './extractOpacity';
import { colorNames, integerColor } from './extractColor';

const fillRules = {
  evenodd: 0,
  nonzero: 1,
};

// default fill is black
const black = colorNames.black;
const defaultFill = [0, integerColor(black)];

export default function extractFill(props, styleProperties) {
  if (props.fill != null) {
    styleProperties.push('fill');
  }
  if (props.fillOpacity != null) {
    styleProperties.push('fillOpacity');
  }
  if (props.fillRule != null) {
    styleProperties.push('fillRule');
  }

  const { fill, fillRule, fillOpacity } = props;
  return {
    fill: !fill && typeof fill !== 'number' ? defaultFill : extractBrush(fill),
    fillRule: fillRules[fillRule] === 0 ? 0 : 1,
    fillOpacity: extractOpacity(fillOpacity),
  };
}
