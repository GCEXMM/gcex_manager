import React from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import bgImage from '../../assets/images/bg-sign-in-basic.jpeg';
import Card from '@mui/material/Card';
import MUIBox from '../../components/MUIBox';
import MUITypography from '../../components/MUITypography';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import Step from '@mui/material/Step';
import MUIInput from '../../components/MUIInput';
import MUIButton from '../../components/MUIButton';
import { useState } from 'react';

const Login = () => {
  const [currentStep, setCurrentStep] = useState(1);

  console.log(currentStep);

  const handleGoNextStep = () => {
    if (currentStep < 2) setCurrentStep(currentStep + 1);
  };

  const handleGoPreviousStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const EmailForm = (
    <MUIBox component="form" role="form">
      <MUIBox mb={2}>
        <MUIInput type="email" label="Email" fullWidth />
      </MUIBox>

      <MUIBox mt={10}>
        <MUIButton variant="gradient" color="info" fullWidth onClick={handleGoNextStep}>
          Get Email Code
        </MUIButton>
      </MUIBox>
    </MUIBox>
  );

  const EmailCodeForm = (
    <MUIBox component="form" role="form">
      <MUIBox mb={2}>
        <MUIInput label="Email Code" fullWidth />
      </MUIBox>

      <MUIBox mt={10} display="flex" justifyContent="space-between" alignItems="center">
        <MUIButton variant="gradient" color="secondary" onClick={handleGoPreviousStep}>
          Back
        </MUIButton>
        <MUIButton variant="gradient" color="info" onClick={handleGoNextStep}>
          Login
        </MUIButton>
      </MUIBox>
    </MUIBox>
  );

  return (
    <AuthLayout image={bgImage}>
      <Card>
        <MUIBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          textAlign="center"
        >
          <MUITypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Login
          </MUITypography>
          <MUIBox px={3}>
            <Stepper alternativeLabel={true} activeStep={currentStep - 1}>
              <Step>
                <StepLabel>Email</StepLabel>
              </Step>
              <Step>
                <StepLabel>OTP</StepLabel>
              </Step>
            </Stepper>
          </MUIBox>
        </MUIBox>

        <MUIBox pt={6} pb={3} px={3}>
          {currentStep === 1 && EmailForm}
          {currentStep === 2 && EmailCodeForm}
        </MUIBox>
      </Card>
    </AuthLayout>
  );
};

export default Login;
