import { useRef } from 'react';
import Image from 'next/image';
// import { ErrorMessage } from 'formik';
import { Box } from '@mui/material';

import { Input } from './';
import { ImagePreview } from './imagePreview';
import { Stack, Paragraph, Heading } from '@components/index';

interface Props {
  header: string;
  text: string;
  name: string;
  setValue(): void;
  handleChange(): void;
  fileValue: string;
  props: any;
}

export const Card: React.FC<Props> = ({
  header,
  text,
  setValue,
  fileValue,
  handleChange,
  name,
  ...props
}) => {
  const fileRef = useRef(null);

  return (
    <Box sx={{ mb: '38px' }}>
      <Heading sx={{ fontSize: '16px', color: '#0F375A', mb: '19px' }}>
        {header}
      </Heading>

      <Stack justifyContent="flex-start" alignItems="top" gap="89px">
        <Box
          sx={{
            background: '#F9F9FB',
            pt: '24px',
            pb: '44px',
            px: '24px',
            width: '50%',
            borderRadius: '10px',
          }}
        >
          <Paragraph sx={{ fontSize: '15px', pb: '24px' }}>{text}</Paragraph>
          <Box sx={{ borderBottom: '1px dotted #3C3C434D', pt: '24px' }}></Box>
          <input
            hidden
            ref={fileRef}
            type="file"
            accept="image/*"
            onChange={(e) => setValue(name, e.target.files[0])}
          />
          <Box
            component="div"
            sx={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}
          >
            <Box height="16px">
              <Image width="24px" height="16px" src="/upload.png" />
            </Box>
            <Paragraph
              color="secondary"
              sx={{ py: '24px', cursor: 'pointer' }}
              onClick={() => {
                fileRef.current.click();
              }}
            >
              Upload file*
            </Paragraph>
          </Box>
          <Paragraph helperText={props.helperText} color="red">
            {props.touched && props.error && props.helperText}
          </Paragraph>

          {fileValue && <ImagePreview file={fileValue} />}

          <Box sx={{ borderBottom: '1px dotted #3C3C434D', pt: '24px' }}></Box>
        </Box>

        <Paragraph>
          {!fileValue ? (
            <Image width="70px" height="70px" src="/iwelcome.png" />
          ) : (
            <Image width="70px" height="70px" src="/vwelcome.png" />
          )}
        </Paragraph>
      </Stack>
    </Box>
  );
};
