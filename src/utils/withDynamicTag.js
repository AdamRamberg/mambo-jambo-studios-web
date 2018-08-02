import { createElement } from 'react';
import styled from 'styled-components';

// Solution from: https://twitter.com/_philpl/status/888039838330621953
export const withDynamicTag = Component => {
  const bucket = {};

  const DynamicTag = props => {
    const { tag } = props;

    if (
      typeof tag !== 'string' ||
      !Object.prototype.hasOwnProperty.call(styled, tag)
    ) {
      return createElement(Component, props);
    }

    if (bucket[tag] === undefined) {
      bucket[tag] = Component.withComponent(tag);
    }

    return createElement(bucket[tag], props);
  };

  const name = Component.displayName || Component.constructor.name;

  if (name) {
    DynamicTag.displayName = `DynamicTag(${name})`;
  }

  return DynamicTag;
};
