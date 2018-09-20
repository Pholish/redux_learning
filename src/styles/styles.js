import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'emotion';

injectGlobal`
    ${styledNormalize}
    * {
        box-sizing: border-box;
    }

    body {
        padding: 0;
     }
    
`;
