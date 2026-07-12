import React from 'react';
import NeuralGateway from './NeuralGateway';

export default function Login({ onBack, onLoginSuccess }) {
  return (
    <NeuralGateway onBack={onBack} onLoginSuccess={onLoginSuccess} />
  );
}