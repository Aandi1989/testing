// import { render, screen, fireEvent } from '@testing-library/react';
// import axios from "axios";
// import Users from './Users';
// import userEvent from '@testing-library/user-event';
// import { MemoryRouter, Route, Routes } from 'react-router-dom';
// import UserDetailsPage from '../pages/UserDetailsPage';

// jest.mock('axios');

// describe('USERS TEST', () => {
//     let response;
//     beforeEach(() => {
//         response = {
//             data: [
//                 {
//                     "id": 1,
//                     "name": "Leanne Graham",
//                 },
//                 {
//                     "id": 2,
//                     "name": "Ervin Howell",
//                 },
//                 {
//                     "id": 3,
//                     "name": "Clementine Bauch",
//                 },
//             ]
//         }
//     })
//     afterEach(() => {
//         jest.clearAllMocks();
//     })
//     test('renders learn react link', async () => {
//         axios.get.mockReturnValue(response)
//         render(<Users />);
//         const users = await screen.findAllByTestId('user-item');
//         expect(users.length).toBe(3);
//         expect(axios.get).toBeCalledTimes(1);
//         screen.debug();
//     });

//     test('test redirect to details page', async () => {
//         axios.get.mockReturnValue(response)
//         render(<MemoryRouter initialEntries={['/users']}>
//             <Routes>
//                 <Route path="/users" element={<Users />} />
//                 <Route path="/users/:id" element={<UserDetailsPage />} />
//             </Routes>
//         </MemoryRouter>);
//         const users = await screen.findAllByTestId('user-item');
//         expect(users.length).toBe(3);
//         userEvent.click(users[0])
//         expect(screen.getByTestId('user-page')).toBeInTheDocument()
//     });
// })