import {
  Sequelize,
  QueryInterface,
  ABSTRACT,
  STRING,
  CHAR,
  TEXT,
  NUMBER,
  TINYINT,
  SMALLINT,
  MEDIUMINT,
  INTEGER,
  BIGINT,
  FLOAT,
  TIME,
  DATE,
  DATEONLY,
  BOOLEAN,
  NOW,
  BLOB,
  DECIMAL,
  UUID,
  UUIDV1,
  UUIDV4,
  HSTORE,
  JSON,
  JSONB,
  VIRTUAL,
  ARRAY,
  ENUM,
  RANGE,
  REAL,
  DOUBLE,
  GEOMETRY,
} from 'sequelize';

interface DataTypes {
  ABSTRACT: typeof ABSTRACT;
  STRING: typeof STRING;
  CHAR: typeof CHAR;
  TEXT: typeof TEXT;
  NUMBER: typeof NUMBER;
  TINYINT: typeof TINYINT;
  SMALLINT: typeof SMALLINT;
  MEDIUMINT: typeof MEDIUMINT;
  INTEGER: typeof INTEGER;
  BIGINT: typeof BIGINT;
  FLOAT: typeof FLOAT;
  TIME: typeof TIME;
  DATE: typeof DATE;
  DATEONLY: typeof DATEONLY;
  BOOLEAN: typeof BOOLEAN;
  NOW: typeof NOW;
  BLOB: typeof BLOB;
  DECIMAL: typeof DECIMAL;
  UUID: typeof UUID;
  UUIDV1: typeof UUIDV1;
  UUIDV4: typeof UUIDV4;
  HSTORE: typeof HSTORE;
  JSON: typeof JSON;
  JSONB: typeof JSONB;
  VIRTUAL: typeof VIRTUAL;
  ARRAY: typeof ARRAY;
  ENUM: typeof ENUM;
  RANGE: typeof RANGE;
  REAL: typeof REAL;
  DOUBLE: typeof DOUBLE;
  GEOMETRY: typeof GEOMETRY;
}

export type SequelizeType = Sequelize & { DataTypes: DataTypes };
export type QueryInterfaceType = QueryInterface;
