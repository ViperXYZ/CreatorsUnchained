import React from 'react';
import {Bond, TimeBond} from 'oo7';
import {Rspan} from 'oo7-react';
import {InputBond, HashBond, BButton} from 'parity-reactive-ui';
import {bonds, formatBlockNumber, formatBalance} from 'oo7-parity';

export class App extends React.Component {
    constructor() {
        super();
        this.bond = new Bond();
        this.time = new TimeBond();
    }

	render() {
		return (
        <div>
			Address of <InputBond bond={this.bond} placeholder='Lookup a name' /> is:<br/>
			<Rspan>{bonds.registry.lookupAddress(this.bond, 'A')}</Rspan>
			, it's balance is <Rspan>
				{bonds.balance(bonds.registry.lookupAddress(this.bond, 'A')).map(formatBalance)}
			</Rspan>
            <br/>
            Accounts available:&nbsp;
        	<Rspan>
                {bonds.accounts.map(_=>_.join(', '))}
        	</Rspan>
            <br/>
            Default account:&nbsp;
	        <Rspan>{bonds.me}</Rspan>
            , it's balance is
            <Rspan>
                {bonds.balance(bonds.me).map(formatBalance)}
            </Rspan>
            <br/>
            This is also my account balance:
            <BButton
	           content={"Show my balance"}
	           disabled={this.recipient.map(isNullData)}
	           onClick={() => bonds.post({to: this.recipient, value: 100 * 1e15})}
            />
		</div>);
	}
}
