# Fitness-Tracker

<img src = "readme_assets\fitness_tracker.gif"></img>

GitHub Repo: https://github.com/dchiev/Fitness-Tracker
Deployed Application: https://pacific-meadow-38241.herokuapp.com/?id=5ff8f68e2ed8070017d99a42

## Application

<img src = "readme_assets\stats.png" width = "600px"></img>

1. This application tracks your cardio or resistance workouts and provides a dashboard to keep track of all of your stats for the week.

## Process

1. Using the provided development files, I created `server.js` with the necessary requirements like epxress and mongoose.

2. I then also added the connection to mongoose that connects to my local mongo database.
   ```javascript
   mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
     useNewUrlParser: true,
     useFindAndModify: false,
     useCreateIndex: true,
     useFindAndModify: false,
   });
   ```
3. I then created an index file under the models directory to connect workout model.
4. In `workout.js`, I created the models to include the necessary fields to contain the values from `seed.js`.
5. After the models, I added the following code to translafe the object into JSON.

```javascript
toJSON: {
      virtuals: true,
}
```

6. This snippet of code is added at the end to serve as the totalDuration JSON for the duration of the workouts.

```javascript
workoutSchema.virtual("totalDuration").get(function () {
  return 5;
});
const Workout = mongoose.model("Workout", workoutSchema);
```
