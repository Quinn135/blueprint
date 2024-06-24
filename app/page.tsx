import ImageDiv from "./imageDiv";
import cat from "/public/cat.jpg";
import chicken from "/public/chicken.jpg";
import raspberry from "/public/raspberry.jpg";

export default function Home() {
  return (
    <>
      <p>Hello</p>
      <p>I'm Quinn</p>
      <p>I don't have a cat</p>
      <p>
        If you're actually looking for my pictures they're at{" "}
        <a href="/the_images" className="a">
          /the_images
        </a>
      </p>
      <ImageDiv
        src={cat}
        desc="here's a cat from the internet though"
        alt="cat"
      />
      <ImageDiv
        src={chicken}
        alt="chicken"
        desc="and here's some chicken also from the internet"
      />
      <ImageDiv
        src={raspberry}
        alt="raspberries"
        desc="and some raspberries because someone wanted them here really badly and they're delicious"
      />
    </>
  );
}
