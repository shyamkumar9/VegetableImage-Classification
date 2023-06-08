import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import axios from 'axios';

function App() {
  const [model, setModel] = useState('');
  const [loading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState();

  const handleChange = (event: SelectChangeEvent) => {
    setModel(event.target.value as string);
  };
  const handleFileUpload = (event: any) => {
    setSelectedFile(event.target.files[0]);
    console.log('File is uploaded');
    console.log(selectedFile);
  };

  const inferenceModel = () => {
    setIsLoading(false);
    axios
      .post('/', {})
      .then(response => {
        console.log(response);
        setIsLoading(true);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  console.log('File name is', selectedFile);

  return (
    <div>
      <div className="vegetable-classification">
        <div className="vegetable-cls-container">
          <div className="title">
            <h3>Vegetable Image Classification</h3>
          </div>
          <div className="formfield">
            <InputLabel id="model">Model</InputLabel>
            <Select
              labelId="model"
              id="demo-simple-select"
              value={model}
              label="Model"
              onChange={handleChange}
              sx={{ width: 150 }}>
              <MenuItem value={'base-line-cnn'}>Base Line CNN</MenuItem>
              <MenuItem value={'vgg'}>VGG</MenuItem>
              <MenuItem value={'resnet'}>ResNet</MenuItem>
              <MenuItem value={'mobilenet'}>MobileNet</MenuItem>
            </Select>
          </div>
          <label htmlFor="upload-photo" className="upload-photo formfield">
            <input
              style={{ display: 'none' }}
              id="upload-photo"
              name="upload-photo"
              type="file"
              onChange={handleFileUpload}
            />
            <Fab color="secondary" size="small" component="span" aria-label="add" variant="extended">
              <AddIcon /> Upload photo
            </Fab>
          </label>
          <div className="formfield">
            <LoadingButton loading={loading} loadingPosition="start" variant="contained">
              Predict
            </LoadingButton>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footerul">
        <li>
          <a href="https://www.linkedin.com/in/shyam-kumar-kanuru/">Shyam Kumar</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sri-rashmitha-boya/">Rushu</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ritwik-budhiraja-38193b182/">Ritwik</a>
        </li>
        <li>
          <p>👋</p>
        </li>
      </ul>
    </div>
  );
};

export default App;
