import React, { Component } from "react";
import styles from "./contactOrder.css";
import Button from '../../components/UI/button/button';
import axiosInstance from '../../axios_order';
import Spinner from '../../components/UI/spinner/spinner';

class ContactOrder extends Component {
    state = {
        email: "",
        name: "",
        address: {
            street: "",
            postalCode: ""
        },
        loading: false,

    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const orderInfomation = {
            ingredients: this.props.ingredients,
            totalPrice: this.props.totalPrice,
            customer: {
                name: "Teemo",
                address: {
                    street: "6A",
                    city: "Phnom Penh"
                }
            },
            deliveryMethod: "Fastest"
        };
        axiosInstance
            .post("order.json", orderInfomation)
            .then(response => {
                console.log("Successed!!")
                this.setState({ loading: false });
            })
            .catch(err => console.log(err));
    }
    render() {
        console.log(`contactOrder ${this.props.ingredients} and ${this.props.totalPrice}`)
        let form = (<form>
            <div>
                <p>Name</p>
                <input type="text" placeholder="Name" />
            </div>
            <div>
                <p>Email</p>
                <input type="text" placeholder="Email" />
            </div>
            <div>
                <p>Street:</p>
                <input type="text" placeholder="Street" />
            </div>
            <div>
                <p>Postal Code:</p>
                <input type="text" placeholder="postal code" />
            </div>
            <div className={styles.btnBar} >
                <Button btnType="Success" btnHandler={this.orderHandler}>Order</Button>
                <Button btnType="Danger">Cancel</Button>
            </div>
        </form>);

        if (this.state.loading) {
            form = <Spinner />
        }

        return (
            <div className={styles.container}>
                {form}
            </div>
        )
    }
}

export default ContactOrder;
