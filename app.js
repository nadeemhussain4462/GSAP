// gsap.to("#box", {
//   x: 700,
//   duration: 2,
//   delay: 1,
//   backgroundColor: "#fff",
//   rotate: 360,
//   scale: 0.5,
//   borderRadius: "50%",
// });

// gsap.from("h1", {
//   opacity: 0,
//   duration: 1,
//   y: 30,
//   delay: 1,
//   stagger: -1,
// });
// gsap.to("h2", {
//   opacity: 0,
//   duration: 1,
//   y: 30,
//   delay: 1,
//   stagger: 1,
// });
gsap.to("#box1", {
  x: 700,
  duration: 2,
  delay: 1,
  rotate: 360,
  repeat: -1,
  yoyo: true,
  borderRadius: "50%"
});
