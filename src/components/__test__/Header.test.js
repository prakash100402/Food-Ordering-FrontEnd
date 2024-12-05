import { render, screen } from "@testing-library/react";
import Header from "../Header"
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"

test('should header load', () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
            </Provider>
        </BrowserRouter>
    );

    const cartItem =  screen.getByRole('button',{name: "Login"});
    expect(cartItem).toBeInTheDocument();
});
