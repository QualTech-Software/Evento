import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import OtpErrorModal from "../components/OtpErrorModal";
import OtpSuccessModal from "../components/OtpSuccessModal";

const AccountOTP = () => {
  const [otp, setOtp] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const correctOtp = "123456";

    if (otp === correctOtp) {
      setShowSuccessModal(true);
    } else {
      setShowErrorModal(true);
    }
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    navigate("/welcome");
  };

  return (
    <>
      <StyledAccountOtp className="qt-account-otp">
        <StyledOtpForm>
          <StyledOtpText>
            <p>Enter the verification code</p>
          </StyledOtpText>
          <StyledOtpText2>
            <p>
              We send a 6-digit verification code to the phone number & email
              you provided:
            </p>
          </StyledOtpText2>
          <StyledEmailCall>
            <StyledCall>
              <p>
                <img src={CallIcon} alt="Call Icon" />
                +91 7264026600 <span>Edit</span>
              </p>
            </StyledCall>
            <StyledEmail>
              <p>
                <img src={EmailIcon} alt="Email Icon" />
                John@gmail.com <span>Edit</span>
              </p>
            </StyledEmail>
          </StyledEmailCall>
          <StyledOtpSubText>
            <p>
              Enter the verification code we send on your provided phone number
              & email.
            </p>
          </StyledOtpSubText>
          <StyledOtpInput>
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <StyledTextField1
                key={index}
                value={otp[index] || ""}
                onChange={(e) => {
                  const newOtp = e.target.value;
                  if (/^\d*$/.test(newOtp) && newOtp.length <= 1) {
                    const newOtpArray = otp.split("");
                    newOtpArray[index] = newOtp;
                    setOtp(newOtpArray.join(""));
                  }
                }}
                maxLength="1"
              />
            ))}
          </StyledOtpInput>

          <StyledOtpResend>
            <p>
              Didn’t receive your code? <span>Re-send Code</span>
            </p>
          </StyledOtpResend>
          <StyledOtpButton onClick={handleSubmit}>
            <p>Submit</p>
          </StyledOtpButton>
        </StyledOtpForm>
      </StyledAccountOtp>

      {showErrorModal && (
        <OtpErrorModal
          modalOpen={showErrorModal}
          handleCloseModal={handleCloseErrorModal}
          modalMessage="Invalid OTP, please enter correct OTP."
        />
      )}

      {showSuccessModal && (
        <OtpSuccessModal
          modalOpen={showSuccessModal}
          handleCloseModal={handleCloseSuccessModal}
          modalMessage="OTP Verified Successfully."
        />
      )}
    </>
  );
};
export default AccountOTP;
