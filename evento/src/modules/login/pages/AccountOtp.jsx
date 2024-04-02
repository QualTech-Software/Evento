import React from "react";
import {
  StyledAccountOtp,
  StyledOtpText,
  StyledOtpText2,
  StyledEmailCall,
  StyledCall,
  StyledEmail,
  StyledOtpSubText,
} from "../components/atoms";
import CallIcon from "../../../../public/assets/Call.svg";
import EmailIcon from "../../../../public/assets/Email.svg";

const AccountOTP = () => {
  return (
    <>
      <StyledAccountOtp className="qt-account-otp">
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
        {/* <StyledOtpInput></StyledOtpInput> */}
      </StyledAccountOtp>
    </>
  );
};
export default AccountOTP;
