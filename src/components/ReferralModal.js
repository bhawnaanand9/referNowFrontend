import React from "react";
import { Modal, Box, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  referrerName: yup.string("Enter your name").required("Name is required"),
  referrerEmail: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  refereeName: yup.string("Enter referee name").required("Name is required"),
  refereeEmail: yup
    .string("Enter referee email")
    .email("Enter a valid email")
    .required("Email is required"),
});

const ReferralModal = ({ isOpen, onClose }) => {
  const formik = useFormik({
    initialValues: {
      referrerName: "",
      referrerEmail: "",
      refereeName: "",
      refereeEmail: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    },
  });

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box className="bg-white p-6 rounded shadow-lg max-w-md mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Refer & Earn
        </h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <TextField
              fullWidth
              id="referrerName"
              name="referrerName"
              label="Your Name"
              value={formik.values.referrerName}
              onChange={formik.handleChange}
              error={
                formik.touched.referrerName &&
                Boolean(formik.errors.referrerName)
              }
              helperText={
                formik.touched.referrerName && formik.errors.referrerName
              }
              className="border-0 focus:ring-0"
            />
          </div>
          <div className="mb-4">
            <TextField
              fullWidth
              id="referrerEmail"
              name="referrerEmail"
              label="Your Email"
              value={formik.values.referrerEmail}
              onChange={formik.handleChange}
              error={
                formik.touched.referrerEmail &&
                Boolean(formik.errors.referrerEmail)
              }
              helperText={
                formik.touched.referrerEmail && formik.errors.referrerEmail
              }
              className="border-0 focus:ring-0"
            />
          </div>
          <div className="mb-4">
            <TextField
              fullWidth
              id="refereeName"
              name="refereeName"
              label="Referee Name"
              value={formik.values.refereeName}
              onChange={formik.handleChange}
              error={
                formik.touched.refereeName && Boolean(formik.errors.refereeName)
              }
              helperText={
                formik.touched.refereeName && formik.errors.refereeName
              }
              className="border-0 focus:ring-0"
            />
          </div>
          <div className="mb-4">
            <TextField
              fullWidth
              id="refereeEmail"
              name="refereeEmail"
              label="Referee Email"
              value={formik.values.refereeEmail}
              onChange={formik.handleChange}
              error={
                formik.touched.refereeEmail &&
                Boolean(formik.errors.refereeEmail)
              }
              helperText={
                formik.touched.refereeEmail && formik.errors.refereeEmail
              }
              className="border-0 focus:ring-0"
            />
          </div>
          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ReferralModal;
