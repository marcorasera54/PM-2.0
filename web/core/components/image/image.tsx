export const GreetingImage = () => {
  const images = "https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="w-full h-40 bg-cover bg-center rounded-md" style={{ backgroundImage: `url(${images})`, minHeight: '200px'}}></div>
  );
};