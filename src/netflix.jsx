import Card from "./card";
import MockData from "./mockData";


const Netflix = function () {
  console.log("---" + MockData[0].imgsrc);

/* function nCard(val, index) {
    console.log("val" + val)
    return (
      <Card
        key={index}
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
        cName={val.cName}
      />
    );
  } */

  // FAT ARROW Function
  const nCard =(val, index) => {
    console.log("val" + val);
    return (
      <Card
        key={index}
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
        cName={val.cName}
      />
    );
  }

  return (
    <>
      <ol>
        <Card
          imgsrc="https://picsum.photos/200/100"
          title="A Netflix Series"
          sname="DARK"
          link="http://google.com"
          cName="abc"
        />
        <Card
          imgsrc="https://picsum.photos/200/100"
          title="A Netflix Series"
          sname="DARK"
          link="http://google.com"
          cName="xyz"
        />
        <Card
          imgsrc={MockData[0].imgsrc}
          title="A Netflix Series"
          sname={MockData[0].sname}
          link="http://google.com"
          cName="drf"
        />
      </ol>
      <h3>Map</h3>
      <ol>{MockData.map(nCard)}</ol>
      {/* <ol>
        {MockData.map(function nCard(val, index) {
          console.log("val" + val);
          return (
            <Card
              key={index}
              imgsrc={val.imgsrc}
              title={val.title}
              sname={val.sname}
              link={val.link}
              cName={val.cName}
            />
          );
        })}
      </ol> */}

      <h3>FAT ARROW Function</h3>
      <ol>
        {MockData.map((val, index) => {
          console.log("index " + index);
          {/* console.log("val" + val); */}
          return (
            <Card
              key={index}
              imgsrc={val.imgsrc}
              title={val.title}
              sname={val.sname}
              link={val.link}
              cName={val.cName}
            />
          );
        })}
      </ol>
    </>
  );
}

export default Netflix;
