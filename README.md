# single-spa-microfrontend

### To build and run this parcel, run following command:

- npm run build
- npm run serve

### In order to use this parcel as microfrontend in parent application , please create one react component in parent application and put following code:

```
import React from 'react';
import { withRouter } from "react-router";
import { Button } from 'react-bootstrap';
import Parcel from 'single-spa-react/parcel'

class ParcelPage extends React.Component {
    render() {
        return (
            <div className="react-app py-3">
                <h1 className="h1-react mb-3">Hola, I'm a React Page</h1>
              <Parcel
                    config={() => System.import('http://localhost:9002/index.js')}
                    wrapWith="div"
                />
            </div>
        );
    }
}
export default withRouter(ParcelPage);
```
