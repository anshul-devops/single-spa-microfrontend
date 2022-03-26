import React, {useState, useEffect} from 'react';
import CircularIndeterminate from './loader';
import PartnerBillingAddress from './partner-billing-address';
import PartnerContacts from './partner-contacts';
import constant from '../utils/constants';


//main function
function Details(props) {
  let {data} = props;
  const [loading, setLoading] = useState(true);
  if (data && typeof (data) === 'string') {
    data = JSON.parse(data);
  }
  const loadMfeType = data['loadMfeType'];

  useEffect(() => {

    let mounted = true;
    setLoading(false);
    return () => mounted = false;
  }, [])

  return (
    <div>
      {loading && (
        <div>
          <div>
            <CircularIndeterminate/>
          </div>
        </div>
      )}
      {(!loading) &&
      <>
        <div>
          {
            (loadMfeType === constant['PARTNER-CONTACT']) ? (
              <>
                <PartnerContacts contactsList={data.results}/>
              </>
            ) : (
              <>
                <PartnerBillingAddress buildingAddressList={data.results}/>
              </>
            )
          }
        </div>
      </>}
    </div>
  );
}

export default Details;
