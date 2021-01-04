# Phenotypr

Phenotypr: a tool to extract conditions and phenotypes from clinical notes

## Installation

`git clone git@github.com:adityaekawade/Phenotypr.git`

`npm install`

`npm link`

## Using as an API

On the terminal, run:
`node index.js`

**Example endpoint:**

`http://localhost:4047/phenotype-extractor/?notes=Charcot-Marie-Tooth%20disease;%20demyelination;%20Dejerine%20sottas%20disease%20possibly;%20sensory%20neuropathy;%20hammertoes;%20difficulty%20walking`

**Response**:

```

{

	"result": [
		"Charcot-Marie-Tooth disease",
		"CNS demyelination",
		"demyelination",
		"demyelinating type",
		"Peripheral demyelination",
		"Dejerine-Sottas disease",
		"Hereditary sensory neuropathy",
		"Sensory neuropathy",
		"Hammertoe",
		"Difficulty walking"
	]

}

```

## Using as a CLI tool:

On the terminal, run:
`phenotypr /path/clinical_note_file`

**Example:**

`phenotypr notes.txt`

**Response:**

`Charcot-Marie-Tooth disease, CNS demyelination, demyelination, demyelinating type, Peripheral demyelination, Dejerine-Sottas disease, Hereditary sensory neuropathy, Sensory neuropathy, Hammertoe, Difficulty walking`

## Minimum requirement

Node: v10

Python: 2.7
