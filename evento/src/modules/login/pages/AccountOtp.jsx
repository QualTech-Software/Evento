import React from "react";
import {
  StyledAccountOtp,
  StyledOtpForm,
  StyledOtpText,
  StyledOtpText2,
  StyledEmailCall,
  StyledCall,
  StyledEmail,
  StyledOtpSubText,
  StyledOtpInput,
  StyledTextField1,
  StyledOtpResend,
  StyledOtpButton,
} from "../components/atoms";
import CallIcon from "../../../../public/assets/Call.svg";
import EmailIcon from "../../../../public/assets/Email.svg";

const AccountOTP = () => (
  <>
    <StyledAccountOtp className="qt-account-otp">
      <StyledOtpForm>
        <StyledOtpText>
          <p>Enter the verification code</p>
        </StyledOtpText>
        <StyledOtpText2>
          <p>
            We send a 4-digit verification code to the phone number & email you
            provided:
          </p>
        </StyledOtpText2>
        <StyledEmailCall>
          <StyledCall>
            <p>
              <img src={CallIcon} />
              +91 7264026600 <span>Edit</span>
            </p>
          </StyledCall>
          <StyledEmail>
            <p>
              <img src={EmailIcon} />
              John@gmail.com <span>Edit</span>
            </p>
          </StyledEmail>
        </StyledEmailCall>
        <StyledOtpSubText>
          <p>
            Enter the verification code we send on your provided phone number &
            email.
          </p>
        </StyledOtpSubText>
        <StyledOtpInput>
          <StyledTextField1 />
          <StyledTextField1 />
          <StyledTextField1 />
          <StyledTextField1 />
        </StyledOtpInput>
        <StyledOtpResend>
          <p>
            Didn’t reccive your code? <span>Re-send Code</span>
          </p>
        </StyledOtpResend>
        <StyledOtpButton>
          <p>Submit</p>
        </StyledOtpButton>
      </StyledOtpForm>
    </StyledAccountOtp>
  </>
);

export default AccountOTP;
