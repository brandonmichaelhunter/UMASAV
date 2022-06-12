from django.db import models
from django.utils import timezone
# Create your models here.
class categories(models.Model):
      categoryID   = models.AutoField(primary_key=True)
      categoryName = models.TextField(max_length=1000)
      
      def __str__(self):
          return self.categoryName

class qa(models.Model):
      qaID = models.AutoField(primary_key=True)
      categoryID = models.ForeignKey(categories, on_delete=models.CASCADE)
      question = models.TextField(max_length=3000)
      answer = models.TextField(max_length=3000)
      question_value = models.IntegerField(default=0)
      
      def __str__(self):
          return "{}-{}-{}-{}-{}".format(self.qaID, self.categoryID, self.question, self.answer, self.question_value)
      


class qaplayed(models.Model):
      qaplayedID = models.AutoField(primary_key=True)
      questionanswerID = models.ForeignKey(qa)      
      gameSessionID  = models.ForeignKey(gamesessions)
      
      def __str__(self):
          return "{}-{}-{}".format(self.qaplayedID, self.questionanswerID, self.gameSessionID)

class Users(models.Model):
      userID = models.AutoField(primary_key=True)
      username = models.TextField(max_length=5000)
class user_raised_hand_response(models.Model):
      urhrID = models.AutoField(primary_key=True)
      userID = models.ForeignKey(Users)  
      response_date_time = models.DateTimeField(editable=False)
      
      def __str__(self):
          return "{}-{}-{}".format(self.urhrID, self.userID, self.response_date_time)
      
      def save(self, *args, **kwargs):
        ''' On save, update timestamps '''
        self.response_date_time = timezone.now()
        return super(user_raised_hand_response, self).save(*args, **kwargs)
      

class gamesessions(models.Model):
      gameSessionID = models.AutoField(primary_key=True)
      player_one_score = models.IntegerField(default=0)
      player_one_name = models.TextField(max_length=3000)
      player_two_score = models.IntegerField(default=0)
      player_two_name = models.TextField(max_length=3000)
      player_three_score = models.IntegerField(default=0)
      player_three_name = models.TextField(max_length=3000)
      current_question_id = models.ForeignKey(qa)
      current_question = models.TextField(max_length=5000)
      current_player_turn = models.IntegerField(default=0)
      game_complete = models.BooleanField(default=False)
      who_got_correct_answer_id = models.ForeignKey(Users)  
      last_game_played = models.DateTimeField(editable=False)
      def __str__(self):
          return "{}-{}-{}-{}-{}-{}-{}-{}-{}-{}-{}".format(self.gameSessionID, self.player_one_score, self.player_one_name, 
                                                        self.player_two_score, self.player_two_name,
                                                        self.player_three_score, self.player_three_name,
                                                        self.current_question_id, self.current_question,
                                                        self.current_player_turn, self.game_complete)
      def save(self, *args, **kwargs):
        ''' On save, update timestamps '''
        self.last_game_played = timezone.now()
        return super(gamesessions, self).save(*args, **kwargs)