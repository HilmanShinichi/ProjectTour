import Payment from "../models/Payment.js";

// create new Payment
export const createPayment = async (req, res) => {
  const newPayment = new Payment(req.body);

  try {
    const savedPayment = await newPayment.save();

    res
      .status(200)
      .json({ success: true, message: "Succesfully created", data: savedPayment });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again" });
  }
};

// Update
export const updatePayment = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedPayment = await Payment.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Succesfully updated",
      data: updatedPayment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update",
    });
  }
};

// delete Payment
export const deletePayment = async (req, res) => {
  const id = req.params.id;

  try {
    await Payment.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Succesfully deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete",
    });
  }
};

// getSingle Payment
export const getSinglePayment = async (req, res) => {
  const id = req.params.id;

  try {
    const Payment = await Payment.findById(id);

    res.status(200).json({
      success: true,
      message: "Succesful",
      data: Payment,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// getAll Payment
export const getAllPayment = async (req, res) => {
 

  try {
    const Payments = await Payment.find({})
      
    res.status(200).json({
      success: true,
      message: "Succesful",
      data: Payments,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};
