import React, { useContext } from 'react';
import styled, { css, ThemeContext } from 'styled-components';

function BlockQuote({ text, footer, size, children, ...rest }) {
  const supportedSizes = ['xsmall', 'small', 'medium', 'large', 'xlarge'];
  // Set the default size.
  size = supportedSizes.includes(size) ? size : 'medium';

  const theme = useContext(ThemeContext);
  const Quote = styled.blockquote`
    position: relative;
    background: ${rest.background | theme.global.colors['light-3']};
    color: ${rest.color | theme.global.colors.text.light};
    p::before {
      display: block;
      position: absolute;
      color: ${rest.color | theme.global.colors.text.light};
      content: '\\201C';
    }

    ${size === 'xsmall' &&
      css`
        margin: 0.05em 0;
        padding: 1em 1.5em;
        line-height: 1.05;
        p::before {
          padding-left: 10px;
          font-size: 45px;
          left: -8px;
          top: 3px;
        }
      `};

    ${size === 'small' &&
      css`
        margin: 0.15em 0;
        padding: 1em 2.5em;
        line-height: 1.25;
        p::before {
          padding-left: 10px;
          font-size: 60px;
          left: -4px;
          top: -5px;
        }
      `};

    ${size === 'medium' &&
      css`
        margin: 0.25em 0;
        padding: 1.5em 3.5em;
        line-height: 1.45;
        p::before {
          padding-left: 10px;
          font-size: 80px;
          left: -4px;
          top: -20px;
        }
      `};

    ${size === 'large' &&
      css`
        margin: 0.35em 0;
        padding: 1.5em 4.5em;
        line-height: 1.65;
        p::before {
          padding-left: 10px;
          font-size: 100px;
          left: 5px;
          top: -35px;
        }
      `};

    ${size === 'xlarge' &&
      css`
        margin: 0.45em 0;
        padding: 1.5em 5.5em;
        line-height: 1.85;
        p::before {
          padding-left: 10px;
          font-size: 120px;
          left: 9px;
          top: -50px;
        }
      `};
  `;
  if (text) {
    return (
      <Quote {...rest}>
        <p>{text}</p>
        {footer && <footer>{footer}</footer>}
      </Quote>
    );
  } else {
    return <Quote>{children}</Quote>;
  }
}

export default BlockQuote;
