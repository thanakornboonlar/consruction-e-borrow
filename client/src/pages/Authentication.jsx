export default function Authentication() {
  return userDataFromToken.userType === 'professional' ? <Admin /> : <Member />;
}
