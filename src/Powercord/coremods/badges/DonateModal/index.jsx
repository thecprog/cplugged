const { React, i18n: { Messages } } = require('powercord/webpack');
const { Button } = require('powercord/components');
const { Modal } = require('powercord/components/modal');
const { close: closeModal } = require('powercord/modal');

const Header = require('./Header');

module.exports = class DonateModal extends React.PureComponent {
  constructor () {
    super();
    this.state = {
      easterEgg: Math.floor(Math.random() * 100) === 69
    };
  }

  render () {
    return <Modal className='powercord-text powercord-donate-modal'>
      <Header/>
      <Modal.Content>
        <h3 className='powercord-donate-title'>{Messages.REPLUGGED_CUTIE_TITLE}</h3>
        <h4 className='powercord-donate-subtitle'>{Messages.REPLUGGED_CUTIE_SUBTITLE}</h4>
        <div className='powercord-donate-tier'>
          <div className='details'>
            <span className='price'>{Messages.REPLUGGED_CUTIE_TIER_1_PRICE.format()}</span>
            <span className='perk'>{Messages.REPLUGGED_CUTIE_TIER_1_DESC}</span>
          </div>
        </div>
        <div className='powercord-donate-tier'>
          <div className='details'>
            <span className='price'>{Messages.REPLUGGED_CUTIE_TIER_2_PRICE.format()}</span>
            <span className='perk'>{Messages.REPLUGGED_CUTIE_TIER_2_DESC}</span>
          </div>
        </div>
        <div className='powercord-donate-tier'>
          <div className='details'>
            <span className='price'>{Messages.REPLUGGED_CUTIE_TIER_3_PRICE.format()}</span>
            <span className='perk'>{Messages.REPLUGGED_CUTIE_TIER_3_DESC}</span>
          </div>
        </div>
      </Modal.Content>
      <Modal.Footer>
        <a href='https://patreon.com/replugged' target='_blank'>
          <Button onClick={() => closeModal()}>{Messages.REPLUGGED_CUTIE_DONATE}</Button>
        </a>
        <Button
          onClick={() => closeModal()} look={Button.Looks.LINK}
          color={Button.Colors.TRANSPARENT}
        >
          {Messages.USER_ACTIVITY_NEVER_MIND}
        </Button>
      </Modal.Footer>
    </Modal>;
  }
};
