function MyForm() {
  return (
    <form action="/submit" method="post">
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="fullname"
        name="firstname"
        placeholder="Your first name"
        required
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="fullname"
        name="lastname"
        placeholder="Your last name"
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your email"
        required
      />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows="4" required></textarea>

      <div className="btn">
        <button type="submit">Send</button>
      </div>
    </form>
  );
}
export default MyForm;
