#include <vector>
using namespace std;

class Major
{
  int department, university;
  std::vector<int> reqCourses;
  std::vector<std::vector<int>> choiceCourses;
  std::vector<int> shiz;
  std::vector<int> distReq;
  public:
    Major(int, int, std::vector<int>, std::vector<std::vector<int>>, std::vector<int>, std::vector<int>);
    int getDepartment();
    int getUniversity();
    std::vector<int> getReqCourses();
    std::vector<std::vector<int>> getChoiceCourses();
    std::vector<int> getShiz();
    std::vector<int> getDistReq();
};
