body {
  margin: 0;
  font-family: Arial;
  background: #0f0f1a;
  color: white;
}

header {
  text-align: center;
  padding: 20px;
  background: linear-gradient(90deg, #6a00ff, #00d4ff);
}

#products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  padding: 20px;
}

.product {
  background: #1a1a2e;
  padding: 15px;
  border-radius: 10px;
}

button {
  background: #00d4ff;
  border: none;
  padding: 10px;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
  border-radius: 5px;
}

button:hover {
  background: #6a00ff;
}

section {
  margin: 10px;
  padding: 15px;
  background: #141428;
  border-radius: 10px;
}

input {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
}
