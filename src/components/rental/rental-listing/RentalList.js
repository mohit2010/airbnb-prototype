import React, { Component } from 'react';
import RentalCard from './RentalCard';

// import * as actions from '../../../actions';
// import * as actions from 'actions';

class RentalList extends Component {
        
      renderRentals = () => {
        return (
            this.props.rentals.map((rental, index) => {
                console.log(rental);
                return <RentalCard key={index} rental={rental} />
        })
        )
      }

    // addRental = () => {
    //     const rentals = this.state.rentals;
    //     rentals.push(1);

    //     this.setState({
    //         rentals
    //     });
    // }

    render() {
      return (
          // <section id='rentalListing'>
              <div className='row'>
                  {this.renderRentals()}
              </div>
              // <button onClick={() => {this.addRental()}}>Add Rental! </button> 
          // </section>
      );
    }
}
export default RentalList;
