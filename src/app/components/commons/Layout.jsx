import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider, addLocaleData } from 'react-intl';
import { connect } from 'react-redux';
import en from 'react-intl/locale-data/en';
import de from 'react-intl/locale-data/de';
import es from 'react-intl/locale-data/es';

addLocaleData([...en, ...de, ...es]);

class Layout extends PureComponent {
  render() {
    const { className, children, match, messages } = this.props;
    const lang = (match.params && match.params.lang && match.params.lang !== 'en') ?
      match.params.lang : 'en';
    return (
      <IntlProvider
        locale={lang}
        messages={messages}
      >
        <div className={className}>
          {children}
        </div>
      </IntlProvider>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  match: PropTypes.object,
  className: PropTypes.string,
  messages: PropTypes.object,
};

Layout.defaultProps = {
  className: '',
};

function mapStateTopProps(state) {
  return {
    messages: state.messages,
  };
}

export default connect(mapStateTopProps)(Layout);
