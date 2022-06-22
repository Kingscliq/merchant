import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
// import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';

import { Paragraph, Button } from '@components/index';
import { stepBase } from '@/../public/assets';
import Image from 'next/image';

interface StepperProp {
  children: React.ReactNode;
  activeStep: number;
  steps: string[];
  onNext: () => void;
  onBack: () => void;
  onSubmit: () => void;
  setActiveStep: (step: number) => void;
}

export default function Index({
  steps,
  activeStep,
  setActiveStep,
}: StepperProp) {
  const handleNext = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  // const ColorlibStepIconRoot = styled('div')<{
  //   ownerState: { completed?: boolean; active?: boolean };
  // }>(({ theme, ownerState }) => ({
  //   backgroundColor:
  //     theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  //   zIndex: 1,
  //   color: '#fff',
  //   width: '24px',
  //   height: '24px',
  //   display: 'flex',
  //   borderRadius: '50%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   ...(ownerState.active && {
  //     backgroundImage: `url(${stepBase})`,
  //     // backgroundImage: `url("../../../public/assets/step-icon-base.svg")`,
  //     boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  //   }),
  //   ...(ownerState.completed && {
  //     backgroundImage: `url(${stepCompleted})`,
  //     // backgroundImage: `url("../../../public/assets/step-icon-base.svg")`,
  //   }),
  // }));

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step: any, index: any) => (
          <Step key={step.label}>
            <StepLabel
              sx={{
                '& .MuiStepLabel-root.MuiStepLabel-vertical.MuiStepLabel-label.Mui-active':
                  {
                    '& > p': {
                      color: '#FFAB00',
                    },
                  },
              }}
              StepIconComponent={() => (
                <Box sx={{ borderRadius: '100%' }}>
                  <Image
                    src={stepBase}
                    height={20}
                    width={20}
                    alt="Crowdforce"
                    style={{ borderRadius: '50%' }}
                  />{' '}
                </Box>
              )}
            >
              <Paragraph variant="caption">{step.label}</Paragraph>
            </StepLabel>
            <StepContent>
              <Paragraph
                sx={{
                  color: '#FFAB00',
                }}
              >
                {step.description}
              </Paragraph>
              <Box sx={{ mb: 2, display: 'flex' }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  color="secondary"
                  sx={{
                    color: 'white',
                    width: '100%',
                    py: '8px',
                    borderRadius: '0px',
                    fontWeight: '500',
                    // borderRadius: '8px',
                    my: { xs: '5px', md: '10px' },
                    mt: 1,
                    mr: 1,
                  }}
                >
                  {index === steps.length - 1 ? 'Finish' : 'Continue'}
                </Button>
                <Button
                  variant="outlined"
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{
                    color: 'white',
                    width: '100%',
                    py: '8px',
                    fontWeight: '500',
                    borderRadius: '0px',
                    my: { xs: '5px', md: '10px' },
                    mt: 1,
                    ml: 2,
                    '& .Mui-disabled': {
                      opacity: 0.5,
                      // border: 'none',
                      borderColor: 'tertiary',
                    },
                  }}
                >
                  Back
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
