#include <vector>

class Major
{
  int department, university, focusArea;
  std::vector<int> reqCourses;
  std::vector<std::vector<int>> choiceCourses;
  std::vector<int> shiz;
  int degree;                   //Distinguishes between type of degree: 0 for B.A, 1 for B.S., more to add later
  int reqCredits;
  public:
    Major(int, int, std::vector<int>, std::vector<std::vector<int>>, std::vector<std::vector<int>>, int, int, int);
    int getDepartment();
    int getUniversity();
    std::vector<int> getReqCourses();
    std::vector<std::vector<int>> getChoiceCourses();
    std::vector<std::vector<int>> getShiz();
    int getDegree();
    int getFocusArea();
    int getReqCredits();
};
