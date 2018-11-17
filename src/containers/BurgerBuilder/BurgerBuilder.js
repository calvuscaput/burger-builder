import React, { Component } from 'react';
import { connect } from 'react-redux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axois-orders';
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/widthErrorHandler/withErrorHandler';
import * as actionTypes from '../../store/actions';



class BurgerBuilder extends Component {

  state = {
    purchasing: false,
    loading: false,
    error: false
  }

componentDidMount() {
  // axios.get('https://react-my-burger-2714e.firebaseio.com/ingredients.json')
  // .then(response => {
  //   this.setState({ingredients: response.data});
  // })
  // .catch(error => {
  //   this.setState({error: true})
  // });
}

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients)
    .map(igKey => {
      return ingredients[igKey];
    })
    .reduce((sum, el) => {
      return sum + el;
    }, 0);
    return sum > 0;
  }

  purchaseHandler = () => {
    this.setState({purchasing: true})
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }
  purchaseContinueHandler = () => {
    this.props.history.push('/checkout');
  }

  render () {
    const disabledInfo = {
      ...this.props.ings
    }

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;
    let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />;

    if (this.props.ings) {
      burger = ( <>
        <Burger ingredients={this.props.ings}/>
        <BuildControls
          price={this.props.price}
          ingredientAdded={this.props.onIngredientAdded}
          ingredientRemoved={this.props.onIngredientRemoved}
          disabled={disabledInfo}
          ordered={this.purchaseHandler}
          purchasable={this.updatePurchaseState(this.props.ings)}/>
          </>);
      orderSummary = <OrderSummary 
        price={this.props.price}
        ingredients={this.props.ings}
        purchaseCanceled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler} />
    }
    if (this.state.loading) {
      orderSummary = <Spinner />
    }


    return (
      <>
      <Modal show={this.state.purchasing}
        modalClosed={this.purchaseCancelHandler}>
        {orderSummary}
      </Modal>
      {burger}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
    onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName}),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));