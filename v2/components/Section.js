import Head from "next/head";
import { title } from "../meta";
import { Card, Link, Row, Text } from "@nextui-org/react";

function Section({ chapter, section }) {
  const countWords = (paragraphs) =>
    paragraphs.reduce((total, p) => total + p.split(" ").length, 0);

  const readingTime = (section) =>
    `${Math.round(countWords(section.content) / 200 + 1)} dakika`;

  return (
    <>
      <Head>
        <title>
          {section.title} - {title}
        </title>
        <meta name="description" content={section.content[0]} />
      </Head>
      <Card borderWeight="0" role="presentation">
        <Card.Body>
          <Row>
            <h1 className="back-link">
              <Link href={`/${chapter.slug}`} passhref color="text">
                &larr; {chapter.title}
              </Link>
            </h1>
          </Row>
          <Row>
            <h2 className="section-title">{section.title}</h2>
          </Row>
        </Card.Body>
      </Card>
      <Text className="reading-time">Okuma süresi: {readingTime(section)}</Text>
      {section.content.map((p, id) => (
        <p className="section-paragraph" key={id}>
          {p}
        </p>
      ))}
    </>
  );
}

export default Section;
