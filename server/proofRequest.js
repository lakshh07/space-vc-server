const humanReadableAuthReason =
  "We need to confirm whether you possess a valid membership-card.";

const proofRequest = {
  circuitId: "credentialAtomicQuerySigV2",
  id: 1697916404,
  query: {
    allowedIssuers: ["*"],
    context: "ipfs://QmbdnbxVqHKejzyZGxiMKvZJAf8G3AKE2TpvQNYALdAAtd",
    credentialSubject: {
      Ticket: {},
    },
    type: "spaceMembership",
  },
};

module.exports = {
  humanReadableAuthReason,
  proofRequest,
};
