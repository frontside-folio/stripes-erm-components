import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import isPackage from '../isPackage';

export default class EResourceType extends React.Component {
  static propTypes = {
    resource: PropTypes.shape({
      _object: PropTypes.shape({
        pti: PropTypes.shape({
          titleInstance: PropTypes.shape({
            label: PropTypes.string,
          })
        })
      }),
      reference_object: PropTypes.shape({
        type: PropTypes.string,
      }),
      type: PropTypes.oneOfType([
        PropTypes.shape({ label: PropTypes.string }),
        PropTypes.string,
      ])
    })
  }

  render() {
    const { resource } = this.props;
    if (!resource) return null;

    if (isPackage(resource)) {
      return <FormattedMessage id="stripes-erm-components.package" />;
    }

    return (
      resource?._object?.pti?.titleInstance?.type?.label ||
      // eslint-disable-next-line camelcase
      resource?.reference_object?.type ||
      resource?.type?.label ||
      <FormattedMessage id="stripes-erm-components.title" />
    );
  }
}
