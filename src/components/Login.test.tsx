import { expect, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthContext } from '../context/authContext.js';
import { UserContext } from '../context/userContext.js';
import Login from '../pages/Login/Login.js';

test('renders login form with document type (DNI/RUC) and phone number', () => {
  render(
    <Router>
      <AuthContext.Provider value={{ isAuthenticated: false, login: vi.fn(), logout: vi.fn() }}>
        <UserContext.Provider value={{ user: { document: '', number: '', documentType: 'dni' }, updateUser: vi.fn(), fetchUserData: vi.fn(), selectedPlan: { name: '', age: 0, description: [''], price: 0 }, updatePlan: vi.fn() }}>
          <Login />
        </UserContext.Provider>
      </AuthContext.Provider>
    </Router>
  );

  const documentTypeSelect = screen.getByRole('combobox');
  const documentInput = screen.getByPlaceholderText(/nro. de documento/i);
  const phoneInput = screen.getByPlaceholderText(/celular/i);
  const submitButton = screen.getByRole('button', { name: /cotiza aquí/i });

  expect(documentTypeSelect).toBeInTheDocument();
  expect(documentInput).toBeInTheDocument();
  expect(phoneInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('handles form submission with DNI and phone number', () => {
  const mockLogin = vi.fn(); // Simular la función login
  const mockUpdateUser = vi.fn(); // Simular la función updateUser

  render(
    <Router>
      <AuthContext.Provider value={{ isAuthenticated: false, login: mockLogin, logout: vi.fn() }}>
        <UserContext.Provider value={{ user: { document: '', number: '', documentType: 'dni' }, updateUser: mockUpdateUser, fetchUserData: vi.fn(), selectedPlan: { name: '', age: 0, description: [''], price: 0 }, updatePlan: vi.fn() }}>
          <Login />
        </UserContext.Provider>
      </AuthContext.Provider>
    </Router>
  );

  const documentInput = screen.getByPlaceholderText(/nro. de documento/i);
  const phoneInput = screen.getByPlaceholderText(/celular/i);
  const submitButton = screen.getByRole('button', { name: /cotiza aquí/i });
  const checkbox1 = screen.getByTestId('input-privacity-policy');
  const checkbox2 = screen.getByTestId('input-comunication-policy');

  // Simular interacción con el formulario
  fireEvent.change(documentInput, { target: { value: '12345678' } }); // DNI válido de 8 dígitos
  fireEvent.change(phoneInput, { target: { value: '987654321' } }); // Número celular válido de 9 dígitos
  fireEvent.click(checkbox1);
  fireEvent.click(checkbox2);

  fireEvent.click(submitButton);

  console.log('documentInput: ', documentInput);
  console.log('value: ', mockUpdateUser.mock.calls);

  // Verificar que updateUser y login fueron llamados con los parámetros correctos
  expect(mockUpdateUser).toHaveBeenCalledWith({
    document: '12345678',
    number: '987654321',
    documentType: 'dni',
  });

  expect(mockLogin).toHaveBeenCalled(); // Verifica que se llamó a la función login
});
