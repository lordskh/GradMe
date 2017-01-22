#include "Major.h"

class Student
{
  int university;
  int requiredCredits;
  int remainingCredits;
  std::vector<Major> majors;
  std::vector<long> taken;
  std::vector<std::vector<long>> required;
  std::vector<std::vector<long>> remaining;
  std::vector<std::vector<long>> recommended;
  public:
    Student(int);
    int getUniversity();
    int getRequiredCredits();
    int getRemainingCredits();
    std::vector<Major> getMajors();
    void addMajor(Major);
    void removeMajor(int);
    std::vector<long> getTaken();
    void addTaken(int);
    void removeTaken(int);
    void calculateRequired();
    void calculateRemaining();
    void calculateRecommended();
    std::vector<std::vector<long>> getRequired();
    std::vector<std::vector<long>> getRemaining();
    std::vector<std::vector<long>> getRecommended();
    

};
