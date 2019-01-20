# mediary

## Inspiration
Lots of people have chronic medical conditions that they live with day-to-day. However, when they visit their GP, it can often be a case of he-said-she-said, where the GP has to make a decision in a ten minute window into someone's life, with no knowledge of what has happened in between appointments. Often the advice is to wait and see, but without being documented, this rarely happens. For example, has a mole grown in size over the last few months? It can be hard to say.

Many people don't want to be a burden on the health service, but sometimes this means they don't seek medical advice when they are actually ill. Our app lets patients monitor themselves and see *objective* changes over time for which to base their opinion on.

Furthermore, when people start on a treatment, like a cream, it can be hard to see if there has been any progress because progress can be slow.

We created mediary (`me + diary`, and `med + diary`) as a way of organising evidence about your own body, and how it responds to changes over time. By taking pictures that are organised by a label, this prevents those images from being lost in your camera roll, and integrates with NHS Digital's APIs to allow GPs to see progress (if consent is given) in pictures, without bias or having to take anyone's word for it.

## What it does

It's an app (iOS and Android!) - you'll need Expo (from the App store/Play Store) to run it. When you've downloaded Expo, just go and scan this QR Code:

![QR Code for Expo](https://github.com/moosd/mediary/raw/master/expo.png)

It lets people log in or register with their NHS Number, and add a medical condition they want to keep track of. You can then take pictures and the app will keep them for you, timestamped for you to scroll through at your leisure! Once taken, the images will be backed up onto Azure block storage.

In the future, we imagine being able to detect moles that grow, and other provisional diagnoses, and book an appointment at your GP for you!

## Screenshots
![Screenshot](https://github.com/moosd/mediary/blob/master/Screenshot_20190120-105058.png?raw=true)

## How we built it

We lovingly pieced together the frontend using react-native and the backend using python+Flask and azure to host all the data. :)

## Challenges we ran into
Integrating the microservices architecture that allowed us all to work on our individual parts of the whole and combine them to be greater than the sum of its parts!

## Accomplishments that we're proud of
Integrating with the TPP Medical API to show the last note in your medical record!

## What we learned
We feel everybody learnt something, from web service architecture, APIs and new tools, such as expo.

## What's next for mediary
Hopefully we'll launch it on the actual App store/Play store soon! Watch this space! One of our coders actually has a chronic skin condition, so it's personal!
