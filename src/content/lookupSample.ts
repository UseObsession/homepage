// Written by obsession-index/samples/hollin.py --static: the lookup page's sample entry (hollin.example, an
// invented store) and the index's totals on 13 Nov 2026. Each email's clean copy is public/lookup-sample/<id>.html.
import type { Card, IndexTotals } from '../lib/lookup'

export const sampleCard: Card = {
  "domain": "hollin.example",
  "name": "hollin",
  "journeys": [
    {
      "journey": "welcome",
      "date": "2026-09-29",
      "seeded_at": "2026-09-29T09:12:00+00:00",
      "window_hours": 48,
      "emails": 3,
      "first_after_minutes": 2,
      "list": [
        {
          "id": "34bf56ef-bab7-54ef-8b31-2d3c6ec6776b",
          "subject": "Welcome in. Here’s 10% off",
          "after_minutes": 2,
          "at": "2026-09-29T09:14:00+00:00"
        },
        {
          "id": "ed2545df-dc48-5a46-9b66-5d201d503d02",
          "subject": "How we stonewash every piece",
          "after_minutes": 1625,
          "at": "2026-09-30T12:17:00+00:00"
        },
        {
          "id": "6a702cd4-fe49-516d-a7dd-e66e20da7263",
          "subject": "Your 10% is waiting",
          "after_minutes": 2790,
          "at": "2026-10-01T07:42:00+00:00"
        }
      ],
      "uses_name": false,
      "basket": [],
      "verdict": "ok"
    },
    {
      "journey": "browse",
      "date": "2026-09-29",
      "seeded_at": "2026-09-29T11:40:00+00:00",
      "window_hours": 48,
      "emails": 1,
      "first_after_minutes": 190,
      "list": [
        {
          "id": "fa226843-cd6d-5165-9a08-9dffa90f1075",
          "subject": "Still thinking about the Weekend Shirt?",
          "after_minutes": 190,
          "at": "2026-09-29T14:50:00+00:00"
        }
      ],
      "uses_name": false,
      "basket": [
        {
          "name": "Weekend Shirt",
          "price": 68,
          "currency": "GBP"
        },
        {
          "name": "Stoneware Mug",
          "price": 24,
          "currency": "GBP"
        }
      ],
      "verdict": "gap"
    },
    {
      "journey": "cart",
      "date": "2026-09-29",
      "seeded_at": "2026-09-29T14:05:00+00:00",
      "window_hours": 48,
      "emails": 2,
      "first_after_minutes": 62,
      "list": [
        {
          "id": "9e72ce68-cbd1-5a61-bd0d-bba522593422",
          "subject": "You left something in your bag",
          "after_minutes": 62,
          "at": "2026-09-29T15:07:00+00:00"
        },
        {
          "id": "ff7f3577-4b29-50ed-adf3-82edd6bfdf89",
          "subject": "[shopper], your bag is saved, for now",
          "after_minutes": 1443,
          "at": "2026-09-30T14:08:00+00:00"
        }
      ],
      "uses_name": true,
      "basket": [
        {
          "name": "Pillowcase Pair",
          "price": 48,
          "currency": "GBP"
        }
      ],
      "verdict": "gap"
    },
    {
      "journey": "checkout",
      "date": "2026-09-30",
      "seeded_at": "2026-09-30T08:20:00+00:00",
      "window_hours": 48,
      "emails": 0,
      "first_after_minutes": null,
      "list": [],
      "uses_name": false,
      "basket": [
        {
          "name": "Weekend Shirt",
          "price": 68,
          "currency": "GBP"
        },
        {
          "name": "Pillowcase Pair",
          "price": 48,
          "currency": "GBP"
        }
      ],
      "verdict": "no_email"
    }
  ],
  "faults": [
    {
      "journey": "browse",
      "kind": "blank_name",
      "email": "fa226843-cd6d-5165-9a08-9dffa90f1075",
      "subject": "Still thinking about the Weekend Shirt?"
    },
    {
      "journey": "cart",
      "kind": "finding",
      "text": "The first basket reminder showed the Pillowcase Pair at £0.00. The second, a day later, showed £48."
    },
    {
      "journey": "checkout",
      "kind": "finding",
      "text": "A checkout left with £116 in the bag got no reminder in 48 hours. A basket left the day before got 2."
    }
  ],
  "rhythm": {
    "sends": 11,
    "from": "2026-10-01",
    "to": "2026-11-12",
    "per_week": 1.8,
    "weekday": "Thursday",
    "languages": [
      "English"
    ],
    "latest": [
      {
        "id": "92198385-aa0c-5905-9418-583f39cf4017",
        "subject": "The winter bed edit",
        "at": "2026-11-12T08:30:00+00:00"
      },
      {
        "id": "fffc758e-322e-56d8-b96e-e35673ed093b",
        "subject": "Last day: 15% off table linen",
        "at": "2026-11-10T17:45:00+00:00"
      },
      {
        "id": "74b0b3c9-9e68-55fd-bc90-f3ac44d88d7f",
        "subject": "New: the Weekend Shirt in oat",
        "at": "2026-11-05T08:30:00+00:00"
      }
    ]
  },
  "captured": {
    "from": "2026-09-29",
    "to": "2026-09-30",
    "mail_until": "2026-11-12"
  },
  "built_at": "2026-11-13T09:00:00+00:00",
  "readiness": [
    {
      "stage": "discover",
      "verdict": "pass",
      "line": "Every product is in the sitemap and in the page data agents read."
    },
    {
      "stage": "evaluate",
      "verdict": "slow",
      "line": "Prices and stock read cleanly. Sizes need a hover, and the returns policy is a PDF."
    },
    {
      "stage": "compare",
      "verdict": "pass",
      "line": "Delivery cost, reviews and the returns window are on each product page."
    },
    {
      "stage": "buy",
      "verdict": "stalled",
      "line": "A sign-up pop-up covers the checkout button until it is closed."
    }
  ],
  "offers": [
    {
      "code": "SOFTER10",
      "text": "10% off a first order",
      "where": "Welcome email",
      "seen": "2026-09-29"
    },
    {
      "code": "TABLE15",
      "text": "15% off table linen",
      "where": "Campaign email",
      "seen": "2026-11-10",
      "until": "2026-11-10"
    },
    {
      "text": "Free UK delivery over £75",
      "where": "Every email",
      "seen": "2026-09-29"
    }
  ]
}

export const sampleTotals: IndexTotals = {
  "stores": 258,
  "journeys": {
    "welcome": {
      "runs": 89,
      "answered": 79,
      "median_minutes": 0
    },
    "browse": {
      "runs": 137,
      "answered": 70,
      "median_minutes": 0
    },
    "cart": {
      "runs": 229,
      "answered": 127,
      "median_minutes": 61
    },
    "checkout": {
      "runs": 170,
      "answered": 86,
      "median_minutes": 61
    }
  }
}
