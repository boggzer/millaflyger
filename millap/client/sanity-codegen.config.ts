import { SanityCodegenConfig } from 'sanity-codegen';

const config: SanityCodegenConfig = {
  schemaPath: './millapsanity/schemas/schema',
  outputPath: './src/types/sanitySchema.ts',
};

export default config;
