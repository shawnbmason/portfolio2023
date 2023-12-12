// ************** Send API **************

app.post("/send", async (req, res) => {
  try {
    const { fullName, email, phone, message } = req.body;
    res.json({ msg: "server" });
  } catch (error) {
    res.status(404).json({ msg: "Error ❌" });
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
