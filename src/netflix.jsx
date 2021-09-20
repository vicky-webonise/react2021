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
      <div className="col-3">
        <Card
          key={index}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
          cName={val.cName}
        />
      </div>
    );
  }

  return (
    <>
      <div className="row">
        <div className="col-3">
          <Card
            imgsrc="https://picsum.photos/100/50"
            title="A Netflix Series"
            sname="DARK"
            link="http://google.com"
            cName="abc"
          />
        </div>
        <div className="col-3">
          <Card
            imgsrc="https://picsum.photos/100/50"
            title="A Netflix Series"
            sname="DARK"
            link="http://google.com"
            cName="xyz"
          />
        </div>
        <div className="col-3">
          <Card
            imgsrc={MockData[0].imgsrc}
            title={MockData[0].title}
            sname={MockData[0].sname}
            link={MockData[0].link}
            cName="drf"
          />
        </div>
      </div>
      <h3>Map</h3>
      <div className="row">{MockData.map(nCard)}</div>
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
      <div className="row">
        {MockData.map((val, index, arr) => {
          console.log("arr " + arr);
          console.log("index " + index);
          console.log("val" + val);
          return (
            <div className="col-3">
              <Card
                key={index}
                imgsrc={val.imgsrc}
                title={val.title}
                sname={val.sname}
                link={val.link}
                cName={val.cName}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Netflix;
