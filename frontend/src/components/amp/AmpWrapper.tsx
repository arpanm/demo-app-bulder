import React from 'react';
import { Helmet } from 'react-helmet-async';

interface AmpWrapperProps {
  children: React.ReactNode;
}

const AmpWrapper: React.FC<AmpWrapperProps> = ({ children }) => {
  return (
    <>
      <Helmet>
        <style
          dangerouslySetInnerHTML={{
            __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`,
          }}
          data-amp-boilerplate
        />
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`,
            }}
            data-amp-boilerplate
          />
        </noscript>
      </Helmet>
      {children}
    </>
  );
};

export default AmpWrapper;
