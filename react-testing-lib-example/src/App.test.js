// ----- App.test.js
// import { render, screen, fireEvent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import App from './App';

// describe('TEST APP', () => {
//   test('renders learn react link', () => {
//     render(<App />);
// const helloWorldElem = screen.getByText(/hello world/i);
// const btn = screen.getByRole('button');
// const input = screen.getByPlaceholderText(/input value/i);
// expect(helloWorldElem).toBeInTheDocument();
// expect(btn).toBeInTheDocument();
// expect(input).toBeInTheDocument();
// expect(input).toMatchSnapshot();
// });

// test('renders learn react', async () => {
//   render(<App />);
// const helloWorldElem = screen.queryByText(/hello2/i)
// expect(helloWorldElem).toBeNull()
// expect(helloWorldElem).toHaveStyle({color:'red'})
// screen.debug();
// });

// test("CLICK EVENT", () => {
//   render(<App />);
// const btn = screen.getByTestId('toggle-btn');
// expect(screen.queryByTestId('toggle-elem')).toBeNull();
// fireEvent.click(btn);
// expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
// fireEvent.click(btn);
// expect(screen.queryByTestId('toggle-elem')).toBeNull();
// });

// test("INPUT EVENT", () => {
//   render(<App />);
// const input = screen.getByPlaceholderText(/input value/i);
// expect(screen.queryByTestId('value-elem')).toContainHTML('');
// Искусственное событие
// fireEvent.input(input, {
//   target: {value:'123123'}
// });

// близко к пользователю, обрабатываются события нажатия и тд
// userEvent.type(input, '123123')
// expect(screen.queryByTestId('value-elem')).toContainHTML('123123');
// });
// })
// ----- App.test.js



// ----- Router.test.js
// import { render, screen, fireEvent } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import App from "./App";
// import { MemoryRouter } from "react-router-dom";

// describe("TEST APP", () => {
//   test("Router test", () => {
//     render(
//       <MemoryRouter>
//         <App />
//       </MemoryRouter>
//     );
//     const mainLink = screen.getByTestId("main-link");
//     const aboutLink = screen.getByTestId("about-link");
//     userEvent.click(mainLink);
//     expect(screen.getByTestId("main-page")).toBeInTheDocument();
//     userEvent.click(aboutLink);
//     expect(screen.getByTestId("about-page")).toBeInTheDocument();
//   });

//   test("Error page test", () => {
//     render(
//       <MemoryRouter initialEntries={['/sdsds']}>
//         <App />
//       </MemoryRouter>
//     );
//     expect(screen.getByTestId("not-found-page")).toBeInTheDocument();
//   });
// });
// ----- Router.test.js


// ----Users.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import axios from "axios";
import Users from './users/Users';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import UserDetailsPage from './pages/UserDetailsPage';

jest.mock('axios');

describe('USERS TEST', () => {
    let response;
    beforeEach(() => {
        response = {
            data: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                },
            ]
        }
    })
    afterEach(() => {
        jest.clearAllMocks();
    })
    test('renders learn react link', async () => {
        axios.get.mockReturnValue(response)
        render(<Users />);
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(3);
        expect(axios.get).toBeCalledTimes(1);
        screen.debug();
    });

    test('test redirect to details page', async () => {
        axios.get.mockReturnValue(response)
        render(<MemoryRouter initialEntries={['/users']}>
            <Routes>
                <Route path="/users" element={<Users />} />
                <Route path="/users/:id" element={<UserDetailsPage />} />
            </Routes>
        </MemoryRouter>);
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(3);
        userEvent.click(users[0])
        expect(screen.getByTestId('user-page')).toBeInTheDocument()
    });
})
// ----Users.test.jsx
